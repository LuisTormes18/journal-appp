export const fileUpload = async (file) => {
    const CloudDinaryUrl = "/upload";

    const formData = new FormData();
    formData.append("upload_preset", "react-journal-app");
    formData.append("file", file);

    try {
        const resp = await fetch(CloudDinaryUrl, {
            method: "POST",
            body: formData,
        });

        if (resp.ok) {
            const result = resp.json();

            return result.secure_url;
        }
    } catch (error) {
        console.log(error);
    }

};
