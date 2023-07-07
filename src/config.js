export const exportedObject = {
    baseUrl: (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')? `http://locaohost:8080` : `${window.location.protocol}//${window.location.hostname}`,
};

export const userLoginKey = "userLogin"

export const classSelectKey = "classSelect"
