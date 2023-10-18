import { MenuItem } from "./shared/models/MenuItem";

export const PagesMenu: MenuItem[] = [
    {
        title: "Início",
        faIcon: "fa-solid fa-home",
        route: "inicio"
    },
    {
        title: "Consultas",
        faIcon: "fa-solid fa-stethoscope",
        route: "consultas"
    },
    {
        title: "Vacinas",
        faIcon: "fa-solid fa-syringe",
        route: "vacinas"
    },
    {
        title: "Pacientes",
        faIcon: "fa-solid fa-paw",
        route: "meus-clientes"
    },
    {
        title: "Internações",
        faIcon: "fa-solid fa-heart-pulse",
        route: "internacoes"
    },
    {
        title: "Acesso Restrito",
        faIcon: "fa-solid fa-gear",
        subMenus: [
            {
                title: "Minha Clinica",
                faIcon: "fa-solid fa-hospital",
                route: "minha-clinica"
            },
            {
                title: "Usuários",
                faIcon: "fa-solid fa-users",
                route: "minha-clinica"
            },
        ]
    },
];