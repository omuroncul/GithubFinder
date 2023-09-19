class Github {
    constructor(){
        this.clientId = 'ba2117a604a877a22e3c';
        this.clientSecret = 'b706da3ddea2a7238fe0174f90b7a646d03a4cf5';
        this.perPage = 10;
        this.sort ='asc';
    }

    async getUser(username){
        const profileRes = await fetch(`https://api.github.com/users/${username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
        );

       const repoRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.perPage}&sort=${this.sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);

       const profile = await profileRes.json();
       const repos = await repoRes.json();
      return {
        profile,
        repos,
      };
    }
}


export default Github;