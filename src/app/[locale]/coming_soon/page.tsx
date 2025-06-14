import ComingSoon from "../components/ComingSoon";

export const metadata = {
    title: 'FacilPay | Coming Soon',
    description: 'Revolutionalizing Web3 Chat, Payment and DeFi Banking',
    metadataBase: new URL('https://www.facilpay.io/'),
};


export default function Page() {
    return (
        <main>
            <ComingSoon />
        </main>
    )
}