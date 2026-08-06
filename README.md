# ComfyUI Metadata Reader

[Русский](#русский) · [English](#english)

## Скачать / Download

Открой [последний релиз](https://github.com/Pupokman/ComfyUI-Metadata-Reader/releases/latest) и скачай **`ComfyUI-Metadata-Reader-v4.4.html`**. Затем просто открой файл в современном браузере.

Open the [latest release](https://github.com/Pupokman/ComfyUI-Metadata-Reader/releases/latest) and download **`ComfyUI-Metadata-Reader-v4.4.html`**. Then open the file in a modern browser.

> GitHub автоматически добавляет архивы **Source code (zip)** и **Source code (tar.gz)**. Для обычного использования они не нужны.
>
> GitHub automatically adds the **Source code (zip)** and **Source code (tar.gz)** archives. They are not needed for normal use.

---

## Русский

Локальный ридер метаданных для файлов, созданных в ComfyUI и других генеративных интерфейсах. Работает в браузере без установки, сервера и подключения к интернету.

### Что он извлекает

- положительный и негативный промпты;
- seed, steps, CFG/guidance, sampler, scheduler и denoise;
- размер изображения, FPS и количество кадров;
- checkpoint, UNet, VAE, CLIP, LoRA и другие ресурсы;
- API prompt и полный workflow ComfyUI;
- A1111/Forge-совместимые `parameters`;
- обычные EXIF, XMP и контейнерные теги.

### Форматы

Ридер ищет метаданные в PNG, JPEG, WebP, TIFF, GIF, AVIF/HEIC, SVG/XML, MP4/MOV/M4V/3GP, WebM/MKV, AVI/WAV, MP3, FLAC, OGG/Opus, PDF, JSON, TXT и safetensors.

Для больших медиафайлов читаются начало и конец контейнера, поэтому браузеру не приходится держать в памяти весь видеопоток.

### Использование

1. Скачай `ComfyUI-Metadata-Reader-v4.4.html` из раздела Releases.
2. Открой файл в современном браузере.
3. Перетащи файл в большую область загрузки, выбери его вручную или вставь через `Ctrl+V`.
4. Скопируй нужные параметры либо скачай `workflow.json` или полный файл метаданных.

Язык выбирается кнопками **RU / EN**. По умолчанию используется язык браузера; выбранный язык запоминается, когда доступно локальное хранилище.

### Приватность

Файл обрабатывается только в браузере и никуда не отправляется.

### Ограничения

- Если редактор, мессенджер или сайт удалил метаданные, восстановить их по изображению или видео нельзя.
- Кастомные узлы ComfyUI могут хранить параметры нестандартно. Ридер распознаёт распространённые схемы и вложенные subgraph, но не может заранее знать устройство каждого стороннего узла.
- В очень больших файлах метаданные, расположенные только в середине контейнера, могут не попасть в ограниченное сканирование.

---

## English

A local metadata reader for files created with ComfyUI and other generative interfaces. It runs in the browser without installation, a server, or an internet connection.

### What it extracts

- positive and negative prompts;
- seed, steps, CFG/guidance, sampler, scheduler, and denoise;
- image dimensions, FPS, and frame count;
- checkpoints, UNets, VAEs, CLIP models, LoRAs, and other resources;
- the ComfyUI API prompt and full workflow;
- A1111/Forge-compatible `parameters`;
- regular EXIF, XMP, and container tags.

### Formats

The reader searches for metadata in PNG, JPEG, WebP, TIFF, GIF, AVIF/HEIC, SVG/XML, MP4/MOV/M4V/3GP, WebM/MKV, AVI/WAV, MP3, FLAC, OGG/Opus, PDF, JSON, TXT, and safetensors files.

For large media files, it reads the beginning and end of the container instead of loading the entire video stream into browser memory.

### Usage

1. Download `ComfyUI-Metadata-Reader-v4.4.html` from Releases.
2. Open it in a modern browser.
3. Drop a file onto the large upload area, choose it manually, or paste it with `Ctrl+V`.
4. Copy the settings you need, or download `workflow.json` or the complete metadata file.

Use the **RU / EN** buttons to change the language. The browser language is used by default, and the choice is remembered when local storage is available.

### Privacy

Files are processed entirely in the browser and are never uploaded.

### Limitations

- Metadata removed by an editor, messenger, or website cannot be reconstructed from the image or video itself.
- Custom ComfyUI nodes may store settings in non-standard structures. The reader handles common layouts and nested subgraphs, but it cannot anticipate every third-party node.
- In very large files, metadata stored only in the middle of the container may fall outside the bounded scan.
