# Move new Supabase migrations to drafts

This extension moves new migration files created by `supabase migrations new` to the `migration_drafts` folder so you can work on them later without disrupting the timestamp sequence.

## Features

- Moves new `.sql` migration files from `supabase/migrations` to `supabase/migration_drafts` 
- Checks file timestamps to identify newly created migration files
- Keeps existing migration files intact

## Usage

The extension will run automatically when new `.sql` files are created in the `supabase/migrations` folder. 

You can also manually trigger it by running the **Move new .sql files created by the `supabase migrations new` command in `supabase/migrations` to `supabase/migration_drafts` folder.** command from the Command Palette.

When you are ready to apply a draft migration, simply move it back to the `supabase/migrations` folder.

## Requirements

- Visual Studio Code 1.0+
- A Supabase project with `supabase/migrations` and `supabase/migration_drafts` folders

## Release Notes

### 0.0.1

Initial Release.
    - feat: created extension to manage migration drafts

## Credits

Authored by Nick McVroom - [www.somore.co.uk](https://www.somore.co.uk)

### For more information

* [Supabase Migration Docs](https://supabase.com/docs/guides/cli/local-development#database-migrations)
* [Supabase](https://supabase.com/)

**Enjoy!**