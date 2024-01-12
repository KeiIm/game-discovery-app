const getCroppedImageUrl = (url: string) => {
    // Temporary fix to deal with games without images
    if (!url) return '';
    
    const index = url.indexOf('media/') + 'media/'.length
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl