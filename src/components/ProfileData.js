import React from 'react';

let ProfileData = (props) => {
    let {profile, isuser} = props;
    // console.log(props);
    
    if(Object.keys(profile).length === 0) return null;
    
    let { edge_owner_to_timeline_media, edge_follow, edge_followed_by, full_name, biography, edge_hashtag_to_media, name, profile_pic_url, is_verified} = profile;

    if(isuser){
            return (
                <article className="profile-container container">
                    <section className="row">
                        <section className="col-4">
                            <img src={profile.profile_pic_url_hd} className="profile-img" />
                        </section>            
                        <section className="col">
                            <article className="row">
                                <div className="col">{profile.username} {is_verified ? "Verificado" : ""}</div>
                            </article>
                            <article className="row">
                                    <div className="col">{edge_owner_to_timeline_media.count +" Posts"}</div>        
                                    <div className="col">{edge_followed_by.count +" Followers"}</div>        
                                <div className="col">{edge_follow.count +" Followed"}</div>        
                            </article>
                            <article className="row">
                                    <div className="col">{full_name}</div>        
                            </article>
                            <article className="row">
                                    <div className="col">{biography}</div>        
                            </article>
                            <article className="row"></article>
                        </section>            
                    </section>            
                </article>
            )
    } else {
        return (
            <article className="profile-container container">
                <section className="row">
                    <section className="col-4">
                        <img src={profile_pic_url} className="profile-img" />
                    </section>
                    <section className="col">
                        <article className="row">
                            <div className="col">{name}</div>
                        </article>
                        <article className="row">
                            <div className="col">{edge_hashtag_to_media.count + " Posts"}</div>
                        </article>                        
                    </section>
                </section>
            </article>
        )
    }
}

export default ProfileData;