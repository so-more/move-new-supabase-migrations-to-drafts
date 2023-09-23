import fs from 'fs/promises';
import path from 'path';

async function execute() {
  try {
    const _rootDir = path.join(__dirname, '..', '..');
    const migrationsDir = path.join(_rootDir, 'supabase', 'migrations');
    const draftsDir = path.join(_rootDir, 'supabase', 'migration_drafts');

    // Check if the migrations directory exists
    const migrationsDirExists = await fs.access(migrationsDir).then(() => true).catch(() => false);

    if (!migrationsDirExists) {
      console.error('The "migrations" directory does not exist.');
      return;
    }

    // Read files in the migrations folder
    const files = await fs.readdir(migrationsDir);

    // Filter files by the timestamp criterion
    const filteredFiles = await Promise.all(files.map(async (file) => {
      const filePath = path.join(migrationsDir, file);
      const stats = await fs.stat(filePath);
      const now = new Date();
      
      if (stats.isFile() && file.endsWith('.sql')) {
        const timestamp = parseInt(file.split('_')[0]);
        const timestampDate = new Date(timestamp);
        
        if (now - timestampDate < 5000) {
          const newFilePath = path.join(draftsDir, file);
          await fs.rename(filePath, newFilePath);
          return newFilePath;
        }
      }
      return null;
    }));

    // filteredFiles will contain the paths of the moved files
    console.log('Moved files:', filteredFiles.filter(Boolean));
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

module.exports = execute;