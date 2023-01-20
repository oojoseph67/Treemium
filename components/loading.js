import Link from "next/link";
import { PropagateLoader } from "react-spinners";

const Index = () => {
    return (
        <>
            <div class="authincation section-padding">
                <div class="container h-100">
                    <div class="row justify-content-center h-100 align-items-center">
                        <div class="col-xl-2 col-md-6">
                            <div class="mini-logo text-center my-5">
                                <Link href="/landing"><img src="./images/logo-shark.png" alt="" /></Link>
                            </div>
                            <div class="text-center mt-4">
                                
                                <PropagateLoader color="black"></PropagateLoader>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;