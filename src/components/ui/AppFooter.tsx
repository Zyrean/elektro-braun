import FooterGrid from '@/components/sections/footer/FooterGrid'
import FooterPremium from '@/components/sections/footer/FooterPremium'
import FooterSimpleCenter from '@/components/sections/footer/FooterSimpleCenter'
import FooterSimpleSocial from '@/components/sections/footer/FooterSimpleSocial'

function AppFooter() {
  return (
    <>
      <FooterSimpleSocial />
      <FooterSimpleCenter />
      <FooterPremium />
      <FooterGrid />
    </>
  )
}

export default AppFooter
