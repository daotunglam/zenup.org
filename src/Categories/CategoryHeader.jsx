import useWindowDimensions from '../hooks/useWindowDimensions';

export default function CategoryHeader({ title, imgFolder }) {
    const { width } = useWindowDimensions();
    const isPhone = width <= 480;

    const categoryHeaderStyle = {
        width: '100%',
        height: '100vh',
        maxHeight: '768px',
        paddingTop: '100px',
        boxSizing: 'border-box',
        display: isPhone ? 'flex' : 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        gridTemplateColumns: '5fr 7fr',
        gap: '10px',
    };

    const titleStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const symbolStyle = {
        backgroundImage: `url(imgs/Categories/${imgFolder}/symbol.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        height: '150px',
        width: '150px'
    }

    const categoryNameStyle = {
        textTransform: 'uppercase',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: 'white',
        marginTop: '10px',
        textAlign: 'center'
    };

    const bgImgStyle = {
        backgroundImage: `url(imgs/Categories/categoryHeaderBG.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        width: '100%',
        height: '100vh',
        maxHeight: '768px',
    }

    return (
        <div style={categoryHeaderStyle}>
            <div style={titleStyle}>
                <div style={symbolStyle} />
                <div style={categoryNameStyle}>{title}</div>
            </div>

            {!isPhone &&
                <div style={bgImgStyle} />
            }
        </div>
    )
}