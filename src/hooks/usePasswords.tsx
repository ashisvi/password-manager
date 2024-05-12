import { useState, useEffect } from "react";

const usePasswords = () => {
  const [passwords, setPasswords] = useState<Password[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const BASE_URL = String(process.env.EXPO_PUBLIC_API_URL);

  const fetchPasswords = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setPasswords(data);
    } catch (err) {
      console.log(err);
      setError("Failed to fetch passwords");
    } finally {
      setLoading(false);
    }
  };

  const addPassword = async (newPassword: Password) => {
    setLoading(true);
    setError(null);

    try {
      await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newPassword),
      });
      fetchPasswords();
    } catch (err) {
      setError("Failed to add password");
    } finally {
      setLoading(false);
    }
  };

  const updatePassword = async (updatedPassword: Password) => {
    setLoading(true);
    setError(null);
    try {
      await fetch(`${BASE_URL}/${updatedPassword.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPassword),
      });
      fetchPasswords();
    } catch (err) {
      setError("Failed to update password");
    } finally {
      setLoading(false);
    }
  };

  const deletePassword = async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      });
      fetchPasswords();
    } catch (err) {
      setError("Failed to delete password");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPasswords();
  }, []);

  return {
    passwords,
    loading,
    error,
    fetchPasswords,
    addPassword,
    updatePassword,
    deletePassword,
  };
};

export default usePasswords;
