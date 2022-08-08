export const getData = async (filePath, fileType) => {
    try {
        const response = await fetch(filePath);
        switch (fileType.toUpperCase()) {
            case 'JSON':
                return response.json();


            default:
                return response;
        }
    } catch (error) {
        return error;
    }
};