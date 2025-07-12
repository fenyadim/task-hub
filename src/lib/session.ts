import { jwtVerify, SignJWT } from 'jose'
import Cookies from 'js-cookie'

//TODO:Добавить secret
const encodeKey = new TextEncoder().encode('secret')

type TSessionPayload = {
	id: string
}

export async function encrypt(payload: TSessionPayload) {
	return new SignJWT(payload)
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setExpirationTime('7d')
		.sign(encodeKey)
}

export async function decrypt(session: string | undefined = '') {
	try {
		const { payload } = await jwtVerify<TSessionPayload>(session, encodeKey, {
			algorithms: ['HS256'],
		})
		return payload
	} catch (error) {
		console.log('Failed to verify token', error)
	}
}

export async function createSession(userId: string) {
	const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
	const session = await encrypt({ id: userId })

	Cookies.set('session', session, {
		expires: expiresAt,
		path: '/',
		sameSite: 'lax',
	})
}

export async function deleteSession() {
	Cookies.remove('session', { path: '/' })
}
