# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
    pkgs.pnpm
    pkgs.gh
  ];
  # Sets environment variables in the workspace
  env = {};
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "aaron-bond.better-comments"
      "alefragnani.Bookmarks"
      "alfredbirk.tailwind-documentation"
      "bradlc.vscode-tailwindcss"
      "dbaeumer.vscode-eslint"
      "deerawan.vscode-faker"
      "dsznajder.es7-react-js-snippets"
      "eamodio.gitlens"
      "EditorConfig.EditorConfig"
      "eliostruyf.vscode-typescript-exportallmodules"
      "esbenp.prettier-vscode"
      "ExodiusStudios.comment-anchors"
      "heybourn.headwind"
      "mikestead.dotenv"
      "streetsidesoftware.code-spell-checker"
      "vivaxy.vscode-conventional-commits"
      "PKief.material-icon-theme"
      "formulahendry.auto-close-tag"
      "formulahendry.auto-rename-tag"
    ];
    # Enable previews
    previews = {
      enable = true;
      previews = {
        web = {
          # Example: run "npm run dev" with PORT set to IDX's defined port for previews,
          # and show it in IDX's web preview panel
          command = ["pnpm" "dev" "--port" "$PORT"];
          manager = "web";
          env = {
            # Environment variables to set for your server
            PORT = "$PORT";
          };
        };
      };
    };
    # Workspace lifecycle hooks
    workspace = {
      # Runs when a workspace is first created
      onCreate = {
        # Example: install JS dependencies from NPM
        npm-install = "pnpm install";
        # Open editors for the following files by default, if they exist:
        default.openFiles = [ "README.md" ];
      };
      # Runs when the workspace is (re)started
      onStart = {
        # Example: start a background task to watch and re-build backend code
        # watch-backend = "npm run watch-backend";
      };
    };
  };
}
