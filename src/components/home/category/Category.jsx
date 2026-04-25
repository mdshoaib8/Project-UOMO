import { CategoryData } from "../../../api/categorydata";
import Container from "../../ui/Container";
import Card from "./Card";

export default function Category() {
    return (
        <section className="mt-25.25">
            <Container>
                <div className="grid h-150 grid-cols-4 grid-rows-2 gap-7.5">
                    {CategoryData?.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </Container>
        </section>
    );
}