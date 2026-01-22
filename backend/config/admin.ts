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
          /*,
          populate: null,
          fields: ["slug"],*/
        });

        // Single type (Homepage)
        if (uid === "api::homepage.homepage") {
          return `${env("CLIENT_URL")}/?preview=true`;
        }

        const { slug } = document;
        // Generate a preview url
        const urlSearchParams = new URLSearchParams({
          secret: env("PREVIEW_SECRET"),
          ...(slug && { slug }),
          uid,
          status,
        });

        // return it so strapi can use it
        const previewURL = `${env("CLIENT_URL")}/api/preview?${urlSearchParams}`;
        return previewURL;
      },
    },
  },
});

/*
        const pathname = getPreviewPathname(uid, { locale, document });

        return `${env("PREVIEW_URL")}${pathname}`;

    },
    */
