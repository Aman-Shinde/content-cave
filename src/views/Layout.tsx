import React from 'react';

interface Styles {
    [key: string]: React.CSSProperties;
}

const styles: Styles = {
    mainContainerWrapper: {
        width: "100%",
        marginTop: "48px"
    },
    mainContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        flexWrap: "nowrap",
        overflowX: "auto",
        width: "100%",
    },
    flexItemContainer: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        minWidth: "300px",
        height: "600px",
        overflowY: "auto",
    },
    flexItemHeaderContainer: {
        minWidth: "350px",
        textAlign: "center",
        position: "sticky",
        top: 0,
        zIndex: 1,
    },
    categories: {
        width: "calc(100% - 24px)",
        margin: "24px 12px",
        padding: "12px 0px",
        marginTop: "0px",
        borderRadius: "5%",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        backgroundColor: "#FDF8FC"
    },
    flexItem: {
        width: "calc(100% - 24px)",
        minHeight: "200px",
        margin: "12px 12px",
        borderRadius: "5%",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        backgroundColor: "#FDF8FC"
    }
};

const Layout: React.FC = () => {

    const columnColors : string[] = ['#FDF8FC', '#F0F8FF', '#FAFAD2', '#E6E6FA'];
    const categories : string[]= ['Not Started', 'In Development', 'In Testing', 'Done']

    return (
        <>
            <div className="mainContainerWrapper" style={styles.mainContainerWrapper}>
                <div className="mainContainer" style={styles.mainContainer}>
                    {[...Array(4)].map((_, colIndex) => {
                        const bgColor : string = columnColors[colIndex % columnColors.length];
                        const category : string = categories[colIndex % categories.length];
                        return (
                            <div key={colIndex} className="flexItemContainer" style={styles.flexItemContainer}>
                                <div className="flexItemHeaderContainer" style={styles.flexItemHeaderContainer}>
                                    <p className="categories" style={{...styles.categories, backgroundColor: bgColor}}>{category}</p>
                                </div>
                                {[...Array(8)].map((_, itemIndex) => (
                                    <div key={itemIndex} className="flexItem" style={{...styles.flexItem, backgroundColor: bgColor}}></div>
                                ))}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default Layout;
