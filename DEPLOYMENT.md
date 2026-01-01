# See detailed deployment guide in dokploy_deployment.md

## Quick Start

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
   git push -u origin main
   ```

2. **Environment Variables for Dokploy**
   ```
   DATABASE_URL=postgresql://user:pass@host/db
   NEXTAUTH_SECRET=your-32-char-secret
   NEXTAUTH_URL=https://yourapp.dokploy.app
   NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_xxx
   PAYSTACK_SECRET_KEY=sk_test_xxx
   NEXT_PUBLIC_APP_URL=https://yourapp.dokploy.app
   TEST_PRICE=2900
   ```

3. **After Deployment**
   ```bash
   npx prisma migrate deploy
   ```

See dokploy_deployment.md for complete guide.
