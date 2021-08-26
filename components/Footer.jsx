/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footercontainermain} style={{ backgroundColor: "#0D3344" }}>
            <div className="mt-4 pt-4 text-white">
                <div className="container mt-4 ">
                    <div className="text-center">
                        <h1>Join our community</h1>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center mt-3 mb-3">
                        <div className="p-2"><a href="https://instagram.com/asgoodasnew.in?utm_medium=copy_link"><img src="/images/social/instagram.svg" style={{ width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                        <div className="p-2"><a href="https://www.youtube.com/channel/UCGecze7CEL2wF4O5qg2PQOg"><img src="/images/social/youtube.svg" style={{ width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center pb-4 pt-4 mt-3 mb-3">
                        <div className="p-2 ml-3">Terms & Condition</div>
                        <div className="p-2 " style={{ marginLeft: "40px", marginRight: "40px" }}>Privacy Policy</div>
                        <div className="p-2 mr-3">Community Guidelines</div>
                    </div>
                </div>
                <div className="container-fluid " style={{ backgroundColor: "#052634" }}>
                    <div className="text-center mt-4 pt-4 pb-4">@AsGoodAsNew. All rights Reserved</div>
                </div>
            </div>
        </footer>
    )
}
export default Footer