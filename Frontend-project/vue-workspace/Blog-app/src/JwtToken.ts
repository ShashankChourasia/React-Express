export interface JwtToken {
    userId: string;
    jwtToken: string;
}

export default function authHeader(): Record<string, string> {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
  
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
}