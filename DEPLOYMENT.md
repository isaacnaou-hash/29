# Deploying to Dokploy - English Proficiency Test Platform

This guide will help you deploy the English Proficiency Test platform to Dokploy.

## Prerequisites

- Dokploy instance running
- PostgreSQL database (you can use Dokploy's managed databases or external provider)
- Paystack account with API keys

## Step 1: Prepare Your Database

### Option A: Use Dokploy Managed PostgreSQL

1. In your Dokploy dashboard, go to **Databases**
2. Click **Create Database** and select **PostgreSQL**
3. Note down the connection string provided

### Option B: Use External PostgreSQL

You can use providers like:
- [Neon](https://neon.tech) - Free tier available
- [Supabase](https://supabase.com) - Free tier available
- [Railway](https://railway.app) - Free tier available

## Step 2: Get Paystack API Keys

1. Sign up at [Paystack](https://paystack.com)
2. Go to **Settings** → **API Keys & Webhooks**
3. Note your:
   - Public Key (`pk_test_...` for test mode or `pk_live_...` for production)
   - Secret Key (`sk_test_...` for test mode or `sk_live_...` for production)

## Step 3: Deploy to Dokploy

1. **Create New Application**
   - Go to your Dokploy dashboard
   - Click **Create Application**
   - Select **Docker** as the deployment method

2. **Connect Your Repository**
   - Upload your code or connect your Git repository
   - Dokploy will detect the `Dockerfile` automatically

3. **Set Environment Variables**
   
   Go to the **Environment** tab and add these variables:

   ```
   DATABASE_URL=postgresql://user:password@host:5432/database_name?schema=public
   NEXTAUTH_SECRET=your-super-secret-jwt-key-min-32-characters
   NEXTAUTH_URL=https://your-domain.com
   NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_your_public_key
   PAYSTACK_SECRET_KEY=sk_test_your_secret_key
   NEXT_PUBLIC_APP_URL=https://your-domain.com
   TEST_PRICE=2900
   ```

   **Important Notes:**
   - `NEXTAUTH_SECRET`: Generate a secure random string (at least 32 characters)
   - `DATABASE_URL`: Use your actual PostgreSQL connection string
   - `NEXTAUTH_URL` and `NEXT_PUBLIC_APP_URL`: Your production domain
   - `TEST_PRICE`: Price in cents (2900 = $29.00)

4. **Configure Build Settings**
   - Build Command: (Leave default, Docker handles it)
   - Port: `3000`

5. **Deploy**
   - Click **Deploy**
   - Dokploy will build and deploy your application

## Step 4: Initialize Database

After deployment, you need to run Prisma migrations:

1. In Dokploy, go to your application
2. Find the **Console** or **Terminal** section
3. Run these commands:

```bash
npx prisma migrate deploy
```

This will create all necessary database tables.

## Step 5: Configure Domain

1. In Dokploy, go to **Domains**
2. Add your custom domain or use the provided subdomain
3. Enable SSL/HTTPS (Dokploy handles this automatically)

## Step 6: Configure Paystack Webhook (Optional but Recommended)

1. Go to Paystack Dashboard → **Settings** → **API Keys & Webhooks**
2. Add webhook URL: `https://your-domain.com/api/payment/webhook`
3. This allows real-time payment verification

## Step 7: Test Your Application

1. Visit your deployed domain
2. Create a test account
3. Use Paystack test cards to verify payment flow:
   - **Test Card**: 4084 0840 8408 4081
   - **CVV**: Any 3 digits
   - **Expiry**: Any future date
   - **PIN**: 0000

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host:5432/db` |
| `NEXTAUTH_SECRET` | JWT secret key (min 32 chars) | `your-super-secret-key-here` |
| `NEXTAUTH_URL` | Your production URL | `https://englishtest.com` |
| `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` | Paystack public key | `pk_test_xxxxx` or `pk_live_xxxxx` |
| `PAYSTACK_SECRET_KEY` | Paystack secret key | `sk_test_xxxxx` or `sk_live_xxxxx` |
| `NEXT_PUBLIC_APP_URL` | Your production URL | `https://englishtest.com` |
| `TEST_PRICE` | Test price in cents | `2900` (=$29) |

## Production Checklist

Before going live:

- [ ] Switch to Paystack **live** API keys
- [ ] Update `NEXT_PUBLIC_APP_URL` and `NEXTAUTH_URL` to production domain
- [ ] Use a production PostgreSQL database with backups
- [ ] Set a strong `NEXTAUTH_SECRET` (use: `openssl rand -base64 32`)
- [ ] Enable HTTPS/SSL
- [ ] Test the complete flow: register → pay → test → certificate
- [ ] Set up monitoring and error tracking

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify Docker configuration
- Check Dokploy build logs

### Database Connection Issues
- Verify `DATABASE_URL` is correct
- Ensure database is accessible from Dokploy
- Check firewall rules if using external database

### Payment Not Working
- Verify Paystack API keys are correct
- Check if using test/live keys appropriately
- Ensure `NEXT_PUBLIC_APP_URL` is set correctly for callbacks

### Prisma Errors
- Run `npx prisma generate` in the console
- Run `npx prisma migrate deploy`

## Support

For issues specific to:
- Dokploy: Check [Dokploy Documentation](https://docs.dokploy.com)
- Paystack: Check [Paystack Documentation](https://paystack.com/docs)
- Database: Check your provider's documentation

## Scaling

As your application grows:
1. Upgrade your database plan
2. Enable connection pooling (recommend PgBouncer)
3. Add Redis for caching (optional)
4. Monitor performance and optimize queries

## Backup Strategy

1. **Database Backups**: 
   - Enable automatic backups in your database provider
   - Or use `pg_dump` for manual backups

2. **Code Backups**:
   - Keep code in Git repository
   - Tag releases for easy rollback

Congratulations! Your English Proficiency Test platform is now live! 🎉
