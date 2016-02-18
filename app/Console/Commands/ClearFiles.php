<?php

namespace App\Console\Commands;

use Storage;
use App\File;
use Carbon\Carbon;
use Illuminate\Console\Command;

class ClearFiles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'clear:files';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Remove all expired files.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $files = File::all();

        foreach ($files as $file)
        {
            if (Carbon::now() >= $file->expire_date)
            {
                $file->delete();
                Storage::delete($file->name);
            }
        }
    }
}
