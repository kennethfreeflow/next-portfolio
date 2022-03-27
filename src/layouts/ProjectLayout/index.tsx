import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import { classNames } from "../../utils/tailwind"

const ProjectLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    <main className={classNames('min-h-screen')}>{children}</main>
    <Footer />
  </>
)

export default ProjectLayout