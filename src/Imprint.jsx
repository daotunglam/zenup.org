import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function Imprint() {
    const location = useLocation();
    useEffect(()=>window.scrollTo(0,0),[location]);
    
    return (
        <div style={{
            padding:'24px',
            marginTop: '100px',
        }}>
            <h1>IMPRESSUM</h1>

            <p>
                Angaben gemäß § 5 TMG:
                <br />
                Adresse: <br />
                Sushi Xeng <br />
                Anh Tuan Hoang <br />
                Augustenstraße 52 <br />
                80333 München <br />
                <br />
                hello@sushixeng.de <br />
                <br />
                Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: <br />
                <br />
                Verantwortlich für den Inhalt nach § 55. Abs. 3 RStV: <br />
                <br />
                Anh Tuan Hoang <br />
                <br />
                DAS IMPRESSUM GILT AUCH FÜR FOLGENDE ONLINEPRÄSENZEN: <br />
                https://www.facebook.com/Xeng-Sushi-Munich-101711799305327 <br />
                https://www.instagram.com/sushi.xeng <br />
                <br />
                HAFTUNG FÜR INHALTE <br />
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                <br /> <br />
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                <br /> <br />
                HAFTUNG FÜR LINKS <br />
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                <br /> <br />
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                <br /> <br />
                URHEBERRECHT <br />
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                <br /> <br />
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                <br />
                Quellverweis: https://www.e-recht24.de
            </p>
        </div>
    )
}