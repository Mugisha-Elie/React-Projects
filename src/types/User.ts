interface Name{
    title: string;
    first: string;
    last: string;
}

interface Location{
    street: string;
    city: string;
    state: string;
    zip: string;
}

interface Picture{
    large: string;
    medium: string;
    thumbnail: string;
}



interface UserDetails{
    gender: string;
    name: Name;
    location: Location
    email: string;
    username: string;
    registered: number;
    dob: number;
    cell: string;
    picture: Picture;
}

export interface User{
    user: UserDetails
}

