export interface UserDto {
    company: CompanyDto;
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
}

export interface CompanyDto {
    name: string;
    catchPhrase: string;
    bs: string;
}
