import useWindowDimensions from '../hooks/useWindowDimensions';

export default function CategoryHeader({ title, imgFolder }) {
    const { width } = useWindowDimensions();
    const isTablet = width <= 768;
    const isPhone = width <= 480;
    const screenOver1024 = width > 1024;

    const categoryHeaderStyle = {
        width: '100%',
        height: isPhone? '100dvh' : isTablet ? 'auto' : '100dvh',
        paddingTop: '100px',
        boxSizing: 'border-box',
        display: 'flex',
        overflow: 'hidden',
    };

    const titleStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const categoryNameStyle = {
        textTransform: 'uppercase',
        fontSize: screenOver1024? '5rem' : isPhone ? '52px' : '64px',
        fontWeight: '450',
        color: 'white',
        marginTop: '10px',
        textAlign: 'center'
    };

    return (
        <div style={categoryHeaderStyle}>
            <div style={titleStyle}>
                <img
                    src={`imgs/Categories/${imgFolder}/symbol.png`}
                    alt={`${title}`}
                    width='200px'
                />
                <div style={categoryNameStyle}>{title}</div>
            </div>

            {!isPhone &&
                <img
                    src="imgs/Categories/categoryHeaderBG.png"
                    alt="categoryHeader background"
                    width='60%'
                    height={isTablet? 'auto' : '100%'}
                />
            }
        </div>
    )
}