// Loader.jsx
import React from 'react';

const Loader = () => {
    return (
        <div style={styles.loaderContainer}>
            <div style={styles.loader}></div>
            <p style={styles.loaderText}>Loading...</p>
        </div>
    );
};

const styles = {
    loaderContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000', // Adjust the background color and opacity
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999, // Adjust the z-index to make sure it's on top
    },
    loader: {
        border: '8px solid #f3f3f3',
        borderTop: '8px solid #3498db',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        animation: 'spin 1s linear infinite',
    },
    loaderText: {
        marginTop: '16px',
        fontSize: '16px',
        color: '#333',
    },
};

export default Loader;