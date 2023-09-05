import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production'
  ? 'https://djamel-back-end.onrender.com'
  : 'http://localhost:3000';

const axiosInstance = axios.create({
  baseURL,
});

const handleError = (error) => {
  if (error.response) {
    // Si hay una respuesta en el error, puedes acceder a err.response.data
    console.error(error.response.data);
    return { error: error.response.data.msg || 'Error desconocido' };
  } else if (error.request) {
    // Si la solicitud fue realizada pero no recibió respuesta
    console.error('No se recibió respuesta del servidor');
    return { error: 'No se recibió respuesta del servidor' };
  } else {
    // Si ocurrió un error antes de realizar la solicitud
    console.error('Error al realizar la solicitud:', error.message);
    return { error: 'Error al realizar la solicitud' };
  }
};


export const getDataAPI = async (url, token) => {
  try {
    const res = await axiosInstance.get(`/api/${url}`, {
      headers: { Authorization: token },
    });
    return res;
  } catch (error) {
    return handleError(error);
  }
};

export const postDataAPI = async (url, post, token) => {
  try {
    const res = await axiosInstance.post(`/api/${url}`, post, {
      headers: { Authorization: token },
    });
    return res;
  } catch (error) {
    return handleError(error);
  }
};

export const putDataAPI = async (url, post, token) => {
  try {
    const res = await axiosInstance.put(`/api/${url}`, post, {
      headers: { Authorization: token },
    });
    return res;
  } catch (error) {
    return handleError(error);
  }
};

export const patchDataAPI = async (url, post, token) => {
  try {
    const res = await axiosInstance.patch(`/api/${url}`, post, {
      headers: { Authorization: token },
    });
    return res;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteDataAPI = async (url, token) => {
  try {
    const res = await axiosInstance.delete(`/api/${url}`, {
      headers: { Authorization: token },
    });
    return res;
  } catch (error) {
    return handleError(error);
  }
};
