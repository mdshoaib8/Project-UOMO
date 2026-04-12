import Image from "../common/Image";
import Container from "./Container";
import { navitems } from "../../api/navbardata";

export default function Header() {

    return (
        <header>
            <nav>
                <Container>
                    <Image
                        src="/images/logo.png"
                        alt="Project UOMO Logo"
                    />
                    <ul>
                        {
                            navitems?.map((item) =>(
                                <li key={item.id}>{item.name}</li>
                            ))
                        }
                    </ul>
                </Container>
            </nav>
        </header>
    );
}
