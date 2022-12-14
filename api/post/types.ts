export interface AddPostForm {
    title: string;
    body: string;
}

export interface PostDto extends AddPostForm {
    id: number;
    userId: number;
}
