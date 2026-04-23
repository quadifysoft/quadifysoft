# Quadify Soft Contact Worker

Cloudflare Worker endpoint for `POST /api/contact`.

It sends:

- the project inquiry to `office@quadifysoft.rs`
- an automatic reply to the visitor from the Zoho Mail account

## Required Cloudflare secrets / variables

Set these in the Worker dashboard:

```text
ZOHO_DC=eu
ZOHO_CLIENT_ID=...
ZOHO_CLIENT_SECRET=...
ZOHO_REFRESH_TOKEN=...
ZOHO_ACCOUNT_ID=...
ZOHO_FROM=office@quadifysoft.rs
ZOHO_TO=office@quadifysoft.rs
ALLOWED_ORIGIN=https://quadifysoft.rs
```

Use `ZOHO_DC=com` only if Zoho Mail is on `mail.zoho.com`. For Europe, use `eu`.

## Zoho API requirements

Create a Zoho OAuth client and generate a refresh token with this scope:

```text
ZohoMail.messages.CREATE
```

The sending account must be allowed to send as `office@quadifysoft.rs`.

## Cloudflare route

Attach the Worker to:

```text
quadifysoft.rs/api/contact
```

or:

```text
quadifysoft.rs/api/*
```

After the Worker is deployed and secrets are set, the contact form can post directly to `/api/contact`.
