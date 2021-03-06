import routes from './routes';
import axios from 'axios'
import { getToken, getApiKey } from './Config'
export const Get_TaskList = async () => {
    let res
    try {
        res = await axios.get(`${routes.TASKS.url}/details`, {
            headers: { Authorization: getToken() }
        })
        if (res.status === 200 || res.status === 201 || res.status === 304) {
            return { success: true, data: res.data }
        }
        else {
            return { success: false, data: [] }
        }
    } catch (error) {
        return { message: error?.response?.data, success: false }
    }
}

export const Get_FilteredTasks = async (data) => {
    let res
    try {
        res = await axios.get(`${routes.TASKS.url}/details`,
            {
                params: data,
                headers: { Authorization: getToken() }
            })
        if (res.status === 200 || res.status === 201 || res.status === 304) {
            return { success: true, data: res.data }
        }
        else {
            return { success: false, data: [] }
        }
    } catch (error) {
        return { message: error?.response?.data, success: false }
    }
}

export const Get_TaskType = async () => {
    let res
    try {
        res = await axios.get(`${routes.REQUEST_TYPES.url}/details`, {
            headers: { Authorization: getToken() }
        })
        if (res.status === 200 || res.status === 201 || res.status === 304) {
            return { success: true, data: res.data }
        }
        else {
            return { success: false, data: [] }
        }
    } catch (error) {
        return { message: error?.response?.data, success: false }
    }
}

export const Get_AreaType = async () => {
    let res
    try {
        res = await axios.get(`${routes.AREAS.url}/details`, {
            headers: { Authorization: getToken() }
        })
        if (res.status === 200 || res.status === 201 || res.status === 304) {
            return { success: true, data: res.data }
        }
        else {
            return { success: false, data: [] }
        }
    } catch (error) {
        return { message: error?.response?.data, success: false }
    }
}

export const Get_TaskClass = async () => {
    let res
    try {
        res = await axios.get(`${routes.CLASS.url}/details`, {
            headers: { Authorization: getToken() }
        })
        if (res.status === 200 || res.status === 201 || res.status === 304) {
            return { success: true, data: res.data }
        }
        else {
            return { success: false, data: [] }
        }
    } catch (error) {
        return { message: error?.response?.data, success: false }
    }
}

export const Add_NewTask = async (data) => {
    let res
    try {
        res = await axios.post(`${routes.TASKS.url}/details`, data,
            {
                params: getApiKey(),
                headers: { Authorization: getToken() }
            })
        if (res.status === 200 || res.status === 201 || res.status === 304) {
            return { success: true, data: res.data }
        }
        else {
            return { success: false, data: [] }
        }
    } catch (error) {
        return { message: error?.response?.data, success: false }
    }
}

export const Get_VendorList = async (data) => {
    let res
    try {
        res = await axios.get(`${routes.AUTH_USER.url}`, {
            params: data,
            headers: { Authorization: getToken() }
        })
        if (res.status === 200 || res.status === 201 || res.status === 304) {
            return { success: true, data: res.data }
        }
        else {
            return { success: false, data: [] }
        }
    } catch (error) {
        return { message: error?.response?.data, success: false }
    }
}

export const Update_Tasks = async (data) => {
    let res
    try {
        res = await axios.put(`${routes.TASKS.url}/details`, data, {
            headers: { Authorization: getToken() }
        })
        if (res.status === 200 || res.status === 201 || res.status === 304) {
            return { success: true, data: res.data }
        }
        else {
            return { success: false, data: [] }
        }
    } catch (error) {
        return { message: error?.response?.data, success: false }
    }
}

export const Update_Password = async (data) => {
    let res
    try {
        res = await axios.post(`${routes.AUTH_USER.url}/update-password`, data, {
            headers: { Authorization: getToken() }
        })
        if (res.status === 200 || res.status === 201 || res.status === 304) {
            return { success: true, data: res.data }
        }
        else {
            return { success: false, data: [] }
        }
    } catch (error) {
        return { message: error?.response?.data, success: false }
    }
}

export const Reset_Password = async (data) => {
    let res
    try {
        res = await axios.post(`${routes.AUTH_USER.url}/reset-password`, data, {
            headers: { Authorization: getToken() }
        })
        if (res.status === 200 || res.status === 201 || res.status === 304) {
            return { success: true, data: res.data }
        }
        else {
            return { success: false, data: [] }
        }
    } catch (error) {
        return { message: error?.response?.data, success: false }
    }
}

export const Get_Status = async () => {
    let res
    try {
        res = await axios.get(`${routes.TASKS.url}/group`, {
            headers: { Authorization: getToken() }
        })
        if (res.status === 200 || res.status === 201 || res.status === 304) {
            return { success: true, data: res.data }
        }
        else {
            return { success: false, data: [] }
        }
    } catch (error) {
        return { message: error?.response?.data, success: false }
    }
}