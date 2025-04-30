export type Certificate = {
    id: number;
    name: string;
    nameEN: string;
    url: string;
    animationDuration: string;
}

export type Skill = {
    name: string;
    nameEN?: string;
    level: number;
    icon: string;
    animationDuration: string;
}

export type SideHeaderItem = {
    icon: string;
    label: string;
    route: string;
}

export type ProjectsItem = {
    name: string;
    nameEN?: string;
    description: string;
    descriptionEN?: string;
    image: string;
    alt: string;
    altEN?: string;
    projectURL: string;
    statusUrl: boolean;
}

export type Experiences = {
    title: string;
    date: string;
    description: string;
}