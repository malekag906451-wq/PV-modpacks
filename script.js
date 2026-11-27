function ModpackDownload() {
    const link = document.createElement("a");
    link.href = "file/vulkano 0.5.0.mrpack";
    link.download = "vulkano 0.5.0.mrpack";
    link.click();
}