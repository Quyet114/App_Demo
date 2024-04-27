import AxiosInstance from "../../http/AxiosInstance";

export const getNews = async () => {
    try {
        const axiosInstance = AxiosInstance();
        const url = '/articles';
        const response = await axiosInstance.get(url);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getNewsDetail = async (id) => {
    try {
        const axiosInstance = AxiosInstance();
        const url = `/articles/${id}/detail`;
        const response = await axiosInstance.get(url);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const searchNews = async (keyword) => {
    try {
        const axiosInstance = AxiosInstance();
        const url = `/articles/search?title=${keyword}`;
        const result = await axiosInstance.get(url);
        return result;
    } catch (error) {
        console.log('>>>>>>>> search news', error);
        throw error;
    }
}
//upload ảnh lên server
export const uploadIamge = async (form) => {
    try {
        const axiosInstance = AxiosInstance('multipart/form-data');
        const url = '/media/upload';
        const result = await axiosInstance.post(url, form);
        return result;
    } catch (error) {
        console.log('>>>>>upload image', error);
        throw error;
    }
}

export const createNew = async (title, content, image) => {
    try {
        const url = '/articles';
        const body = {
            title: title,
            content: content,
            image: image,
        }
        return await AxiosInstance().post(url, body);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const updateProfile = async (name, address, phone, avatar) => {
    try {
        const axiosInstance = AxiosInstance();
        const url = '/users/update-profile';
        const body = {
            name: name,
            address: address,
            phone: phone,
            avatar: avatar
        };
        return await axiosInstance.post(url, body);
        // return await AxiosInstance().post(url, body);
    } catch (error) {
        console.log(error);
        throw error;
    }
}