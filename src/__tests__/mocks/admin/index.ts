import { IAdmLogin, IAdmRequest } from "../../../interfaces/admin";

export const mockedAdm: IAdmRequest = {
    name: "Joao",
    email: "joao@mail.com",
    isAdm: true,
    password: "123456789",
};

export const mockedAdmWithoutPermission: IAdmRequest = {
    name: "Jose",
    email: "teste@mail.com",
    isAdm: false,
    password: "123456789",
};

export const mockedAdmWithoutEmail: IAdmRequest = {
    name: "Teste",
    email: "",
    isAdm: true,
    password: "123456789",
};

export const mockedAdmWithoutPassword: IAdmRequest = {
    name: "Fulano",
    email: "fulano@mail.com",
    isAdm: true,
    password: "",
};  

export const mockedAdminLogin: IAdmLogin = {
    email: "joao@mail.com",
    password: "123456789",
};

export const mockedNotAdminLogin: IAdmLogin = {
    email: "jose@mail.com",
    password: "123456789",
};

export const mockedWrongAdminLogin: IAdmLogin = {
    email: "joose@mail.com",
    password: "554433",
};
