export const loginUser = async (data: {
    email: string;
    password: string;
}) => {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
    }

    return res.json();
};

export const registerUser = async (data: {
    name: string;
    email: string;
    password: string;
}) => {
    const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
    }

    return res.json();
};
