export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  secrets: {
    encryptionKey: env("ENCRYPTION_KEY"),
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
  preview: {
    enabled: true,
    config: {
      allowedOrigins: env("CLIENT_URL"),
      // handler
      async handler(uid, { documentId, locale, status }) {
        const document = await strapi.documents(uid).findOne({
          documentId,
          populate: null,
          fields: ["slug"],
        });

        const { slug } = document;
        // Bygg path baserat på content type
        let pathname = "/";
        if (uid === "api::category.category") {
          pathname = document.slug
            ? `/categories/${document.slug}`
            : "/categories";
        }

        // Lägg till locale om det inte är engelska
        if (locale && locale !== "en") {
          pathname = `/${locale}${pathname}`;
        }

        // Generate the preview pathname based on content type and document
        // const pathname = getPreviewPathname(uid, { locale, document });

        // Disable preview if the pathname is not found
        if (!pathname) {
          return null;
        }

        // Use Next.js draft mode passing it a secret key and the content-type status
        // Skicka med secret, status och documentId
        const urlSearchParams = new URLSearchParams({
          url: pathname,
          secret: env("PREVIEW_SECRET"),
          ...(slug && { slug }),
          status,
          uid,
        });

        const previewURL = `${env("CLIENT_URL")}/api/preview?${urlSearchParams}`;
        return previewURL;

        /* const { slug } = document;
        // Generate a preview url
        const urlSearchParams = new URLSearchParams({
          secret: env("PREVIEW_SECRET"),
          ...(slug && { slug }),
          uid,
          status,
        });

        // return it so strapi can use it
        const previewURL = `${env("CLIENT_URL")}/api/preview?${urlSearchParams}`;
        return previewURL;*/
      },
    },
  },
});
