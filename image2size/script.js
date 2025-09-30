// script.js for image2size — handles image upload, platform selection, conversion, language translation and ZIP export

// Global state for selected file
let selectedFile = null;

// Platform size definitions
const platformSizes = {
  instagram: {
    post: { width: 1080, height: 1080 },
    story: { width: 1080, height: 1920 }
  },
  twitter: {
    post: { width: 1200, height: 675 },
    header: { width: 1500, height: 500 }
  },
  facebook: {
    post: { width: 1200, height: 630 },
    cover: { width: 820, height: 312 }
  },
  linkedin: {
    post: { width: 1200, height: 627 },
    background: { width: 1584, height: 396 }
  }
};

// Translation dictionary for UI strings and variant labels
const translations = {
  en: {
    title: 'Bulk Social Media Image Export',
    subtitle: 'Upload one image, select platform size & format, and download a ZIP.',
    uploadHeading: 'Upload Image',
    uploadLabel: 'Select Image',
    optionsHeading: 'Export Options',
    platformLabel: 'Platform:',
    sizeLabel: 'Size:',
    formatLabel: 'Formats:',
    qualityLabel: 'Quality (0-100):',
    exportBtn: 'Export ZIP',
    variantLabels: {
      post: 'Post',
      story: 'Story',
      header: 'Header',
      cover: 'Cover',
      background: 'Background'
    },
    alerts: {
      selectFile: 'Please select an image file first',
      selectFormat: 'Please select at least one format'
    },
    progress: {
      processing: 'Processing image…',
      done: 'Export completed',
      failed: 'Export failed, please try again'
    },
    copied: 'Copied current settings to clipboard'
  },
  zh: {
    title: '社交媒体图像批量导出',
    subtitle: '上传一张图片，选择平台尺寸和格式，然后下载 ZIP。',
    uploadHeading: '上传图片',
    uploadLabel: '选择图片',
    optionsHeading: '导出选项',
    platformLabel: '平台:',
    sizeLabel: '尺寸:',
    formatLabel: '导出格式:',
    qualityLabel: '质量 (0-100):',
    exportBtn: '导出 ZIP',
    variantLabels: {
      post: '帖子',
      story: '故事',
      header: '横幅',
      cover: '封面',
      background: '背景'
    },
    alerts: {
      selectFile: '请先选择图片文件',
      selectFormat: '请选择至少一种格式'
    },
    progress: {
      processing: '正在处理图片…',
      done: '导出完成',
      failed: '导出失败，请重试'
    },
    copied: '已复制当前设置至剪贴板'
  }
};

// Currently selected language; default is English
let selectedLanguage = 'en';

// DOM elements
const fileInput = document.getElementById('file-input');
const fileNameDisplay = document.getElementById('file-name');
const exportBtn = document.getElementById('export-btn');
const progressEl = document.getElementById('progress');
const variantSelect = document.getElementById('variant-select');
const platformButtons = document.querySelectorAll('.platforms .platform');
const copyBtn = document.getElementById('copy-btn');

// Track currently selected platform
let selectedPlatform = 'instagram';

// Populate variant options based on selected platform and current language
function populateVariants() {
  const platform = selectedPlatform;
  const variants = platformSizes[platform];
  variantSelect.innerHTML = '';
  const labels = translations[selectedLanguage].variantLabels;
  Object.keys(variants).forEach((key) => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = labels[key] || key;
    variantSelect.appendChild(opt);
  });
}

// Set UI language dynamically
function setLanguage(lang) {
  if (!translations[lang]) return;
  selectedLanguage = lang;
  const t = translations[lang];
  // Update text content for various elements
  document.getElementById('title').textContent = t.title;
  document.getElementById('subtitle').textContent = t.subtitle;
  document.getElementById('upload-heading').textContent = t.uploadHeading;
  // Replace the text node after the input inside upload label
  const uploadLabel = document.getElementById('upload-label');
  uploadLabel.lastChild.nodeValue = ` ${t.uploadLabel}`;
  document.getElementById('options-heading').textContent = t.optionsHeading;
  document.getElementById('platform-label').textContent = t.platformLabel;
  document.getElementById('size-label').textContent = t.sizeLabel;
  document.getElementById('format-label').textContent = t.formatLabel;
  document.getElementById('quality-label').childNodes[0].nodeValue = `${t.qualityLabel}\n            `;
  document.getElementById('export-btn').textContent = t.exportBtn;
  // Repopulate variant select to update labels
  populateVariants();
  // Update progress text if any existing progress
  const enProgress = translations.en.progress;
  const zhProgress = translations.zh.progress;
  if (progressEl.textContent === enProgress.processing || progressEl.textContent === zhProgress.processing) {
    progressEl.textContent = translations[lang].progress.processing;
  }
  if (progressEl.textContent === enProgress.done || progressEl.textContent === zhProgress.done) {
    progressEl.textContent = translations[lang].progress.done;
  }
  if (progressEl.textContent === enProgress.failed || progressEl.textContent === zhProgress.failed) {
    progressEl.textContent = translations[lang].progress.failed;
  }
}

// Load image helper
function loadImage(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
    img.src = URL.createObjectURL(file);
  });
}

// Base name helper
function getBaseName(fileName) {
  const idx = fileName.lastIndexOf('.');
  return idx !== -1 ? fileName.substring(0, idx) : fileName;
}

// Extension helper
function getExtension(mimeType) {
  switch (mimeType) {
    case 'image/jpeg': return 'jpg';
    case 'image/png': return 'png';
    case 'image/webp': return 'webp';
    case 'image/avif': return 'avif';
    default: return 'img';
  }
}

// Handle file input change
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (!file) {
    selectedFile = null;
    fileNameDisplay.textContent = '';
    return;
  }
  selectedFile = file;
  fileNameDisplay.textContent = file.name;
});

// Populate variants and set default language on load
window.addEventListener('DOMContentLoaded', () => {
  populateVariants();
  // Initial language from select element
  const initialLang = document.getElementById('lang-select').value;
  setLanguage(initialLang);
});

// Handle language change
document.getElementById('lang-select').addEventListener('change', (e) => {
  setLanguage(e.target.value);
});

// Handle platform button clicks
platformButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    selectedPlatform = btn.dataset.platform;
    // Update selected styles
    platformButtons.forEach((b) => b.classList.remove('selected'));
    btn.classList.add('selected');
    // Update variants
    populateVariants();
  });
});

// Handle copy button click — copies current settings to clipboard
copyBtn.addEventListener('click', () => {
  const variant = variantSelect.value;
  let textToCopy = '';
  if (selectedFile) {
    const baseName = getBaseName(selectedFile.name);
    textToCopy = `${baseName}-${selectedPlatform}-${variant}`;
  }
  navigator.clipboard.writeText(textToCopy).then(() => {
    progressEl.textContent = translations[selectedLanguage].copied;
  }).catch(() => {
    // Fallback message if clipboard API fails
    progressEl.textContent = translations[selectedLanguage].copied;
  });
});

// Main export function
async function exportImages() {
  if (!selectedFile) {
    alert(translations[selectedLanguage].alerts.selectFile);
    return;
  }
  const formatCheckboxes = document.querySelectorAll('input[name="format"]:checked');
  const formats = Array.from(formatCheckboxes).map((cb) => cb.value);
  if (formats.length === 0) {
    alert(translations[selectedLanguage].alerts.selectFormat);
    return;
  }
  // Quality
  let quality = parseInt(document.getElementById('quality').value, 10);
  if (isNaN(quality) || quality < 0 || quality > 100) quality = 80;
  const qualityFactor = quality / 100;
  // Selected platform/variant size
  const platform = selectedPlatform;
  const variant = variantSelect.value;
  const size = platformSizes[platform][variant];
  let targetWidth = size.width;
  let targetHeight = size.height;
  progressEl.textContent = translations[selectedLanguage].progress.processing;
  exportBtn.disabled = true;
  try {
    const image = await loadImage(selectedFile);
    const zip = new JSZip();
    const baseName = getBaseName(selectedFile.name);
    for (const type of formats) {
      const canvas = document.createElement('canvas');
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0, targetWidth, targetHeight);
      const blob = await new Promise((resolve) => {
        let q;
        if (['image/jpeg', 'image/webp', 'image/avif'].includes(type)) {
          q = qualityFactor;
        }
        canvas.toBlob((b) => resolve(b), type, q);
      });
      if (!blob) continue;
      const ext = getExtension(type);
      const fileName = `${baseName}-${platform}-${variant}-${targetWidth}x${targetHeight}.${ext}`;
      zip.file(fileName, blob);
    }
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(zipBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${getBaseName(selectedFile.name)}-export.zip`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    progressEl.textContent = translations[selectedLanguage].progress.done;
  } catch (err) {
    console.error(err);
    progressEl.textContent = translations[selectedLanguage].progress.failed;
  } finally {
    exportBtn.disabled = false;
  }
}

exportBtn.addEventListener('click', exportImages);