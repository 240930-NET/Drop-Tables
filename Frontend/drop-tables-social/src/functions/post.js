const url = 'http://localhost:5001/api/Post/';

export const createPost = async (userId, content) => {
    try {
        const response = await fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId, content})
        });
        if (!response.ok) throw new Error();
        return "Created";
    } catch {
        console.error("Error Creating Post");
        return null;
    }
}