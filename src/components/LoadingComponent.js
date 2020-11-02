import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Loading = () => {
    return(
        <div className="col-12" style={{textAlign: "center"}}>
            <CircularProgress />
            <p style={{textAlign: "center"}}>Téléchargement . . .</p>
        </div>
    );
};