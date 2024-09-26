type TotalProps = {
    total: number;
};

export default function Total({ total }: TotalProps) {
    return (
        <div>Totalt antall studenter: {total}</div>
    );
}
