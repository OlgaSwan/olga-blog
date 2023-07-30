export const routeMap = {
  home: '/',
  aboutHire: '/about/hire',
  aboutMe: '/about/me',
  blogHome: '/blog',
  blogDiaryId: (id: string) => `/blog/diary/${id}`,
  authLogin: '/auth/login',
  adminHome: '/admin',
  adminDiaryList: '/admin/diary',
  adminDiaryId: (id: string) => `/admin/diary/${id}`,
  adminTagList: '/admin/tag',
  errorForbidden: '/403',
  errorNotFound: '/404',
}
