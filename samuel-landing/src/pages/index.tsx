import { Header } from "@/components/Header";
import Github from "../../public/icons/github.svg";
import Linkedin from "../../public/icons/linkedin.svg";


export default function Home() {
  return(
<Header.Root>
  <Header.Content text="Samuel D' Siqueira" />
  <Header.Icons icon={Linkedin} link=">" />
  <Header.Icons icon={Github} link=">" />
</Header.Root>
  )}  