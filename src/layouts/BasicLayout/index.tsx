import Footer from "../../components/Footer"
import Header from "../../components/Header"
import styles from '../../../styles/Home.module.css'

const BasicLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </>
)

export default BasicLayout