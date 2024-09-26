export type Student = {
    id: string;
    name: string; 
    onDelete: (id: string) => void;
}