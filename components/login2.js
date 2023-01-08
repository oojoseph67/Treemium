import Link from "next/link";
import { useAddress, useMetamask, ConnectWallet } from "@thirdweb-dev/react";

const Index = () => {
    const connectWIthMetamask = useMetamask();
    return (
        <>
            <div class="authincation section-padding">
                <div class="container h-100">
                    <div class="row justify-content-center h-100 align-items-center">
                        <div class="col-xl-2 col-md-6">
                            <div class="mini-logo text-center my-5">
                                <Link href="/landing"><img src="./images/logo.png" alt="" /></Link>
                            </div>
                            <div class="text-center mt-4">
                                {/* <button
                                    class="btn btn-success w-100"
                                    onClick={connectWIthMetamask}
                                >
                                    Login with Metamask
                                </button> */}
                                <ConnectWallet
                                    // Some customization of the button style
                                    colorMode="light"
                                    accentColor="#F213A4"
                                />;
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;