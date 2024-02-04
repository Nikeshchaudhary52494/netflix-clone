import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import GoogleLogo from "../../../public/google.svg";
import GitHubLogo from "../../../public/github.svg";
import Link from "next/link";

export default function Login() {
    return (
        <div className="bg-black/70 rounded-sm py-10 px-14">
            <form>
                <h1 className="text-3xl font-semibold">Log in</h1>
                <div className="space-y-4 mt-5">
                    <Input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="bg-[#333] w-full inline-block"
                    />
                    <Button
                        variant={"destructive"}
                        className="w-full text-white bg-[#D81F26]"
                    >Log in</Button>
                </div>
            </form>
            <div className="text-gray-500 text-sm mt-2 text-center">
                New to Nextflix?
                <Link className="text-white hover:underline ml-2" href="/sign-up">
                    Sign up
                </Link>
            </div>

            <div className="flex gap-4 justify-center mt-5">
                <Button variant={"outline"} size={"icon"}>
                    <Image width={35} src={GitHubLogo} alt="Github" />
                </Button>
                <Button variant={"outline"} size={"icon"}>
                    <Image width={35} src={GoogleLogo} alt="Google" />
                </Button>
            </div>
        </div>
    )
}